const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const updateFavoriteContact = async (req, res) => {
  const { contactId } = req.params;
  // const { id: owner } = req.user;

  // const currentContacts = await Contact.find({ owner });

  // if (!currentContacts.some((contact) => contact.id === contactId))
  //   throw HttpError(400, "Not your contact!!!");

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) throw HttpError(404, "Not found");

  res.status(200).json(result);
};

module.exports = updateFavoriteContact;
