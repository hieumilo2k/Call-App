const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const authMiddleware = require('../middleware/authMiddleware');
const friendInvitationControllers = require('../controllers/friendInvitation/friendInvitationControllers');

const postFriendInvitationSchema = Joi.object({
  targetEmailAddress: Joi.string().email(),
});

const inviteDecisionSchema = Joi.object({
  id: Joi.string().required(),
});

router.post(
  '/invite',
  authMiddleware,
  validator.body(postFriendInvitationSchema),
  friendInvitationControllers.controllers.postInvite
);

router.post(
  '/accept',
  authMiddleware,
  validator.body(inviteDecisionSchema),
  friendInvitationControllers.controllers.postAccept
);

router.post(
  '/reject',
  authMiddleware,
  validator.body(inviteDecisionSchema),
  friendInvitationControllers.controllers.postReject
);

module.exports = router;
