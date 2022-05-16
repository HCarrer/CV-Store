import { About } from "./About";
import { Experiences } from "./Experiences";
import { Idioms } from "./Idioms";
import { Languages } from "./Languages";
import { Technologies } from "./Technologies";

export const CART = {
  url: "cart",
  header: "CARRINHO",
};
const TELEPHONE = {
  url: "telephone",
  header: "TELEFONE",
};
const LINKEDIN = {
  url: "https://www.linkedin.com/in/henrique-carrer-094563191/",
  header: "LINKEDIN",
};
const EMAIL = {
  url: "email",
  header: "EMAIL",
};
const WHATSAPP = {
  url: "https://wa.me/5561981419871?text=Olá%20Henrique,%20vi%20seu%20currículo%20e%20me%20interessei!%20Será%20que%20podemos%20conversar?",
  header: "WHATSAPP",
};

export const BottomBarMainTexts = [
  Technologies,
  Languages,
  Idioms,
  Experiences,
  About,
];

export const BottomBarSubTexts = [CART, TELEPHONE, LINKEDIN, EMAIL, WHATSAPP];

export const AuthorIntroduction = "PROJETADO E DESENVOLVIDO POR";
export const AuthorName = "HENRIQUE CARRER";
