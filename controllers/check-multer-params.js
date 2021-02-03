module.exports = input => {
  let filePath;
  let filename;
  let contentType;
  let storage = [];

  switch (Array.isArray(input)) {
    case true:
      input.forEach(element => {
        filePath = element.path;
        filename = element.originalname;
        contentType = element.mimetype;
        storage.push({ filePath, filename, contentType });
      });
      break;

    case false:
      if (typeof input === 'object' && Object.keys(input).length) {
        Object.values(input).forEach(element => {
          filePath = element[0].path;
          filename = element[0].originalname;
          contentType = element[0].mimetype;
          storage = { filePath, filename, contentType };
        });
      }
      break;

    default:
      break;
  }

  return storage;
};
