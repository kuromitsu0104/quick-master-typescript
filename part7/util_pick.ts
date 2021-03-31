{
  interface Book {
    isbn: string;
    title: string;
    price: number;
    published: Date;
  }

  type SubBook = Pick<Book, 'title' | 'price'>

  // type SubBook = Omit<Book, 'isbn' | 'published'>

  // interface SubBook {
  //   title: string;
  //   price: number;
  // }
}