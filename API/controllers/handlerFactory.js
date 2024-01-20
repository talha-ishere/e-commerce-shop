const catchAsync = require("../utils/catchAsync");

exports.getAll = (Module) =>
  catchAsync(async (req, res, next) => {
    let doc = await Module.find();
    //Responce
    res.status(200).json({
      status: "success",
      data: {
        items: doc.length,
        data: doc,
      },
    });
  });

exports.getOne = (Module) =>
  catchAsync(async (req, res, next) => {
    console.log(req.params.id);
    let doc = await Module.find(req.params.id);

    //Responce
    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });
exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    //Responce
    res.status(201).json({
      status: "success",
      data: doc,
    });
  });
exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
exports.updateOne = (Module) =>
  catchAsync(async (req, res, next) => {
    const doc = await Module.findByIdAndUpdate(req.params.id, req.body, {
      // This new wil show data with updated version immediately
      new: true,
      runvalidators: true,
    });
    res.status(200).json({
      status: "success",
      data: doc,
    });
  });
