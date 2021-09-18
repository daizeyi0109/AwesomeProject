export default {
    /**
     * 校验邮箱地址
     * @param {String} email 
     * @returns 
     */
    validatorEmail(email) {
        const reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
        return reg.test(email);
    }
}