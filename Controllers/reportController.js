const Report = require('../models/Report'); // Adjust the path as needed

// Create a new report
exports.createReport = async (req, res) => {
  try {
    const { nom, prenom, cin, sujet, surface, limites_terrain, localisation, superficie_batiments_anciens, observations } = req.body;

    // Create a new report
    const newReport = await Report.create({
      nom,
      prenom,
      cin,
      sujet,
      surface,
      limites_terrain,
      localisation,
      superficie_batiments_anciens,
      observations
    });

    res.status(201).json({ message: 'Report created successfully', report: newReport });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while creating report' });
  }
};

// Get all reports
exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.findAll();
    res.status(200).json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while retrieving reports' });
  }
};

// Get a report by ID
exports.getReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Report.findByPk(id);

    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    res.status(200).json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while retrieving report' });
  }
};

// Update a report
exports.updateReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, prenom, cin, sujet, surface, limites_terrain, localisation, superficie_batiments_anciens, observations } = req.body;

    const updatedReport = await Report.update(
      { nom, prenom, cin, sujet, surface, limites_terrain, localisation, superficie_batiments_anciens, observations },
      { where: { id }, returning: true }
    );

    if (!updatedReport[0]) {
      return res.status(404).json({ message: 'Report not found' });
    }

    res.status(200).json({ message: 'Report updated successfully', report: updatedReport[1][0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while updating report' });
  }
};

// Delete a report
exports.deleteReport = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedReport = await Report.destroy({ where: { id } });

    if (!deletedReport) {
      return res.status(404).json({ message: 'Report not found' });
    }

    res.status(200).json({ message: 'Report deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error while deleting report' });
  }
};
