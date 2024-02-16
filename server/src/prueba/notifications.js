const express = require('express');
const router = express.Router();
const Notification = require('../models/notificationsModel');

// Enviar notificacion
router.post('/notifications', (req, res) => {
  const newNotification = new Notification(req.body);
  newNotification.save((err, message) => {
    if (err) return res.status(400).send(err);
    return res.status(200).send(message);
  });
});

// Recibir notificacion
router.get('/notifications/:userId', (req, res) => {
    Notification.find({ receiver: req.params.userId })
    .sort('-timestamp')
    .exec((err, messages) => {
      if (err) return res.status(400).send(err);
      return res.status(200).send(messages);
    });
});

module.exports = router;
