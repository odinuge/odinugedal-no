package main

import (
	"gopkg.in/macaron.v1"
	"log"
	"net/http"
)

func main() {
	m := macaron.Classic()
	m.Get("/", myHandler)
	m.Use(macaron.Renderer())
	m.Use(macaron.Static("public"))
	log.Println("Server is running...")
	log.Println(http.ListenAndServe("localhost:4000", m))
}

func myHandler(ctx *macaron.Context) {
	ctx.HTML(200, "home")
}
