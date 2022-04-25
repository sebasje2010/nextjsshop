import React, {useContext} from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addCartImage from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';
import addedToCartImage from '@icons/bt_added_to_cart.svg';

const ProductItem = ({product}) => {
	const {state, addToCart}=useContext(AppContext);
	const handleClick=(item)=>{
		addToCart(item);
	};
	return (
		<div className={styles.ProductItem}>
			<Image src={product.images[0]} alt={product.title} width={240} height={240} />
			<div className={styles["product-info"]}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure className={styles["more-clickable-area"]} 
				onClick={() => { }}
				onKeyPress={() => handleClick(product)}
				aria-hidden="true">
					{state.cart.includes(product)?<Image
					className={[styles.disabled, styles["add-to-cart-btn"]]}
						src={addedToCartImage}
						width={50}
						height={50}
						alt="added to cart"	/>:
					<Image className={[styles['add-to-cart'], styles.pointer]} src={addCartImage}  alt="add to cart" />}
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;
