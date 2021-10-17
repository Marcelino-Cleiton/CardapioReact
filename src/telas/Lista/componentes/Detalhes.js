import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Texto from "../../../componentes/Texto";

export default function Detalhes({
  nome,
  logoRestaurante,
  nomeRestaurante,
  descricao,
  preco,
  botao,
}) {
  return (
    <>
      <Texto style={estilos.nome}> {nome}</Texto>
      <View style={estilos.restaurante}>
        <Image
          source={logoRestaurante}
          style={estilos.ImagemRestaurante}
        ></Image>
        <Texto style={estilos.nomeRestaurante}> {nomeRestaurante}</Texto>
      </View>
      <Texto style={estilos.descricao}>{descricao}</Texto>
      <Texto style={estilos.preco}>{preco}</Texto>
      <TouchableOpacity style={estilos.botao} onPress={()=>{}}>
        <Texto style={estilos.textoBotao}>{botao}</Texto>
      </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  restaurante: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  ImagemRestaurante: {
    width: 32,
    height: 32,
  },
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  nomeRestaurante: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#B22222",
    paddingVertical: 16 ,
    borderRadius: 6,
  },
  textoBotao: {
      textAlign : "center",
      color : "#ffffff",
      fontSize : 16,
      lineHeight : 26,
      fontWeight : "bold",
  },
});
