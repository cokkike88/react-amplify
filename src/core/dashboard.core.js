import service from '../service';


let getSellers = async () => {
    try{
        let result = await service.get('/payseller/paySellerForWeek');
        return result;
    }
    catch(error){
        throw new Error(error);
    }
}

let getOrdersBySeller = async (sellerId) => {
    try{
        let result = await service.get(`/payseller/ordersBySeller/${sellerId}`);
        return result;
    }
    catch(error){
        throw new Error(error);
    }
}

let savePay = async (sellerId, orderId, total) => {
    let result = {}
    return result;
}


export {
    getSellers,
    getOrdersBySeller,
    savePay
}