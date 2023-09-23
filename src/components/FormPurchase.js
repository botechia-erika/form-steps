import { useState } from "react";
import { Box, Input, Flex } from "@chakra-ui/react";

export function FormPurchase() {
  const [product, setProduct] = useState({
    id: "p1",
    name: "p1",
    description: "des",
    image_url: "imfg",
    price: 10
  });
  const [purchase, setPurchase] = useState({
    id: "",
    buyer: "",
    paid: 1,
    discount: 0.9
  });
  const calcFinalPrice = (product, purchase) => {
    const calc = product.price * purchase.quantity * purchase.quantity;
    return calc;
  };

  const [viewForm, setViewForm] = useState(1);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [form, setForm] = useState({
    inputCpfCnpj: "",
    inputName: "",
    inputEmail: "",
    inputPassword: "",
    inputNickname: "",
    inputAvatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZjcr6ptSjN0gYZ5MfT30t3MW4kw34Khi5Q&usqp=CAU",
    inputRole: "Buyer",
    /* dados do produto */
    inputProductId: product.id,
    inputFinalPrice: calcFinalPrice(product, purchase)
  });
  return (
    <Flex>
      <Box w={"40%"}>
        <form>
          {viewForm === 1 ? (
            <Box>
              <h2>Dados do Usuario</h2>
              <p>
                <Input
                  type="text"
                  name={"inputCpfCnpj"}
                  id="inputCpfCnpj"
                  value={form.inputCpfCnpj}
                  placeholder={"nome de cadastro"}
                  onChange={(e) => {
                    setForm({ ...form, inputCpfCnpj: e.target.value });
                  }}
                />
              </p>
              <p>
                <Input
                  type="text"
                  name={"inputName"}
                  id="inputName"
                  value={form.inputName}
                  placeholder={"nome de cadastro"}
                  onChange={(e) => {
                    setForm({ ...form, inputName: e.target.value });
                  }}
                />
              </p>
              <p>
                <Input
                  type="text"
                  name={"inputNickname"}
                  id="inputNickname"
                  value={form.inputNickname}
                  placeholder={"pepito-luiz"}
                  onChange={(e) => {
                    setForm({ ...form, inputNickname: e.target.value });
                  }}
                />
              </p>
              <p>
                <Input
                  type="text"
                  name={"inputName"}
                  id="inputName"
                  value={form.inputEmail}
                  placeholder={"pepito@mail.com"}
                  onChange={(e) => {
                    setForm({ ...form, inputEmail: e.target.value });
                  }}
                />
              </p>
              <p>
                <Input
                  type="text"
                  name={"inputPassword"}
                  id="inputPassword"
                  value={form.inputPassword}
                  placeholder={"senha"}
                  onChange={(e) => {
                    setForm({ ...form, inputPassword: e.target.value });
                  }}
                />
              </p>
              <p>
                <Input
                  type="text"
                  name={"confirmPassword"}
                  id="confirmPassword"
                  value={confirmPassword}
                  placeholder={"confirmar senha"}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </p>
              <button
                onClick={() => {
                  setViewForm(2);
                }}
              >
                Proximo Passo
              </button>
            </Box>
          ) : viewForm === 2 ? (
            <div>
              <h2>Dados do Carro</h2>

              <input type="text" />
              <button
                onClick={() => {
                  setViewForm(3);
                }}
              >
                Proximo Passo
              </button>
            </div>
          ) : viewForm === 3 ? (
            <div>
              <h3>Dados de Pagamento</h3>
              <input type="text" />
              <button
                onClick={() => {
                  setViewForm(4);
                }}
              >
                Proximo Passo
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setViewForm(3);
              }}
            >
              Proximo Passo
            </button>
          )}
        </form>
      </Box>
    </Flex>
  );
}
