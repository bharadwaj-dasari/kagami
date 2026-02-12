import * as dataService from '../services/data.services.js';

// GET /api/user/export
export const downloadData = async (req, res) => {
    try {
        const data = await dataService.exportUserData(req.user._id);
        
        // Send as a downloadable JSON file
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Disposition', `attachment; filename="kagami-export-${Date.now()}.json"`);
        
        res.status(200).send(JSON.stringify(data, null, 2));
    } catch (error) {
        res.status(500).json({ error: "Export failed." });
    }
};

// DELETE /api/user/nuke
export const deleteAccount = async (req, res) => {
    try {
        // Require password confirmation here in a real app
        await dataService.deleteUserAccount(req.user._id);
        
        res.status(200).json({ message: "Account and all data permanently deleted." });
    } catch (error) {
        res.status(500).json({ error: "Deletion failed." });
    }
};