const Book = (props) => {
  const { img, title, author, price } = props;

  const clickHandler = () => {
    alert("hey there");
  };

  const anotherClickHandler = (author) => {
    alert(author);
  };

  return (
    <article className="book" onMouseOver={() => {}}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{price}</p>
      <button type="button" onClick={clickHandler}>
        Add to Cart
      </button>
      <button type="button" onClick={() => anotherClickHandler(author)}>
        Buy Now
      </button>
    </article>
  );
};


export default Book;