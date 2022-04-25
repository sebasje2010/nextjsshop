import React,{useContext} from 'react';
import Image from 'next/image';
import AppContext from '../context/AppContext';
import iconClose from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({product, indexValue}) => {
	const {removeFromCart}=useContext(AppContext);
	const handleRemove=(index)=>{
		removeFromCart(index);
	};
	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product?.images[0]} alt={product?.title} />
			</figure>
			<p>{product?.title}</p>
			<p>{product?.price}</p>
			<Image className={[styles.pointer, styles['more-clickable-area']]} src={iconClose} alt="close" onClick={()=>handleRemove(indexValue)}/>
		</div>
	);
};

export default OrderItem;
