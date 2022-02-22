import instance from "./config";

export const getAll = () => {
    const url = `/products`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const add = (post) => {
    const url = `/products/`;
    return instance.post(url, post);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/products/${post.id}`;
    return instance.put(url, post);
};
export const getProduct = (id) => {
    const url = `/products?categoryId=${id}`
    return instance.get(url, id)
}