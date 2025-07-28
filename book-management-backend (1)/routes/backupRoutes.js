const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const { createBackup } = require('../utils/backup');
const { restoreBackup } = require('../utils/restore');

const upload = multer({ dest: 'uploads/' });

router.get('/', async (req, res) => {
  try {
    const fileName = await createBackup();
    res.status(200).json({ message: 'Backup successful', fileName });
  } catch (err) {
    res.status(500).json({ error: 'Backup failed', details: err.message });
  }
});

router.post('/restore', upload.single('backup'), async (req, res) => {
  try {
    const filePath = req.file.path;
    await restoreBackup(filePath);
    fs.unlinkSync(filePath);
    res.status(200).json({ message: 'Restore successful' });
  } catch (err) {
    res.status(500).json({ error: 'Restore failed', details: err.message });
  }
});

module.exports = router;
