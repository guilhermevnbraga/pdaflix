import {
  createSeriesRepository,
  getAllSeriesRepository,
  updateSeriesRepository,
  deleteSeriesRepository,
} from "../repositories/series.repository.js";

export const createSeriesController = async (req, res) => {
  try {
    const seriesData = req.body;

    const newSeries = await createSeriesRepository(seriesData);

    return res.status(201).json(newSeries);
  } catch (error) {
    console.error("Error in createSeriesController:", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllSeriesController = async (req, res) => {
  try {
    const series = await getAllSeriesRepository();

    return res.status(200).json(series);
  } catch (error) {
    console.error("Error in getAllSeriesController:", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateSeriesController = async (req, res) => {
  try {
    const { id } = req.params;
    const seriesData = req.body;

    const updatedSeries = await updateSeriesRepository(Number(id), seriesData);

    return res.status(200).json(updatedSeries);
  } catch (error) {
    console.error("Error in updateSeriesController:", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteSeriesController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedSeries = await deleteSeriesRepository(Number(id));

    return res.status(200).json(deletedSeries);
  } catch (error) {
    console.error("Error in deleteSeriesController:", error);

    return res.status(500).json({ message: "Internal server error" });
  }
};
