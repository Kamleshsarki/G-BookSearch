module.exports = (model, Schema) => {

    const Book = new Schema ({
      title: String,
      authors: [String],
      publishedDate: String,
      description: String,
      image: String,
      link: String
    })
  
    return model('Book', Book)
  }