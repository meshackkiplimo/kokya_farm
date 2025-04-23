import { Request, Response } from "express";
import Rent from "../models/rent";

const getRent = async (req: Request, res: Response) => {
  try {
    const rentId = req.params.rentId;

    const rent = await Rent.findById(rentId);
    if (!rent) {
      return res.status(404).json({ message: "rent not found" });
    }

    res.json(rent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

const searchRent = async (req: Request, res: Response) => {
  try {
    const town = req.params.town;

    const searchQuery = (req.query.searchQuery as string) || "";
    const selectedMachines = (req.query.selectedMachines as string) || "";
    const sortOption = (req.query.sortOption as string) || "lastUpdated";
    const page = parseInt(req.query.page as string) || 1;

    let query: any = {};

    query["town"] = new RegExp(town, "i");
    const townCheck = await Rent.countDocuments(query);
    if (townCheck === 0) {
      return res.status(404).json({
        data: [],
        pagination: {
          total: 0,
          page: 1,
          pages: 1,
        },
      });
    }

    if (selectedMachines) {
      const machinesArray = selectedMachines
        .split(",")
        .map((machine) => new RegExp(machine, "i"));

      query["machines"] = { $all: machinesArray };
    }

    if (searchQuery) {
      const searchRegex = new RegExp(searchQuery, "i");
      query["$or"] = [
        { rentName: searchRegex },
        { machines: { $in: [searchRegex] } },
      ];
    }

    const pageSize = 10;
    const skip = (page - 1) * pageSize;

    // sortOption = "lastUpdated"
    const rents = await Rent.find(query)
      .sort({ [sortOption]: 1 })
      .skip(skip)
      .limit(pageSize)
      .lean();

    const total = await Rent.countDocuments(query);

    const response = {
      data: rents,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / pageSize),
      },
    };

    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default {
  getRent,
  searchRent,
};
