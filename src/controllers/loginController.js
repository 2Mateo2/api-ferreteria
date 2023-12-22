import { login } from "../services/loginService.js";

const validarLogin = async (req, res) => {
    try {
        const loginEmpleado = await login(req, res);
        res.send(loginEmpleado);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al loguearse");
    }
};

export {
    validarLogin
};