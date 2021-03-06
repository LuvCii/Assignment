import instance from "./config";

export const getAll = () => {
    const url = `/category`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/category/${id}`;
    return instance.get(url);
};
export const add = (cate) => {
    const url = `/category/`;
    return instance.post(url, cate);
};
export const remove = (id) => {
    const url = `/category/${id}`;
    return instance.delete(url);
};
export const update = (cate) => {
    const url = `/category/${cate.id}`;
    return instance.put(url, cate);
};
export const getCategory = () => {
    const url = `/category/?_embed=products`;
    return instance.get(url)
};