const initialState = {
  wishList: [],
};

const wishListReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "PUT_TO_WISHLIST": {
      const index = state.wishList.findIndex((item) => item.wishListCourse.course.tenKhoaHoc === actions.payload.course.tenKhoaHoc);
      const cloneWishList = [...state.wishList];
      if (index === -1) {
        const wishListItem = {
          wishListCourse: actions.payload,
          quantity: 1,
        };
        return {
          wishList: [...cloneWishList ,wishListItem]
        }
      } else {
        cloneWishList[index].quantity++
        return  {
          wishList: cloneWishList
        }
      }
    }

    case "REDUCE_ITEM": {
      const index = state.wishList.findIndex((item) => item.wishListCourse.course.tenKhoaHoc === actions.payload.course.tenKhoaHoc);
      const cloneWishList = [...state.wishList];
      if(index >= 0) {
        if(cloneWishList[index].quantity === 1) {
          cloneWishList.splice(index, 1);
        } else if(cloneWishList[index].quantity > 1) {
          cloneWishList[index].quantity--
        }
        return  {
          wishList: cloneWishList
        }
      }
    }
    case "REMOVE_ITEM": {
      const index = state.wishList.findIndex((item) => item.wishListCourse.course.tenKhoaHoc === actions.payload.course.tenKhoaHoc);
      const cloneWishList = [...state.wishList];
      if(index >= 0) {
        cloneWishList.splice(index, 1);
        return  {
          wishList: cloneWishList
        }
      }
    }
    default:
      return state;
  }
};
export default wishListReducer;
