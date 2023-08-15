import { useDispatch } from "react-redux";
import { added } from "../Redux/Products/actions";

const ProductInput = () => {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const category = e.target.category.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const product = { name, category, image, price, quantity };
    console.log(product);
    dispatch(added(product));
  };
  return (
    <div>
      {/* Product Input Form */}
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>

        <form
          onSubmit={handleInput}
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
        >
          {/* product name */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
              name="name"
            />
          </div>

          {/* product category */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
              name="category"
            />
          </div>

          {/* product image url */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
              name="image"
            />
          </div>

          {/* price & quantity container */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* price */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
                name="price"
              />
            </div>

            {/* quantity */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
                name="quantity"
              />
            </div>
          </div>

          {/* submit button */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
      {/* Product Input Form Ends */}
    </div>
  );
};

export default ProductInput;
