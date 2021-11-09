package main

import (
    "fmt"
    "net/http"
    "math/rand"
    "time"
    "strconv"
)

func addRandomNumber(w http.ResponseWriter, req *http.Request) {
    s := rand.NewSource(time.Now().UnixNano())
    r := rand.New(s)
    fmt.Fprintf(w, req.URL.Query().Get("string") + "-" + strconv.Itoa(r.Intn(10000)))
}

func main() {

    http.HandleFunc("/", addRandomNumber)

    http.ListenAndServe(":8081", nil)
}