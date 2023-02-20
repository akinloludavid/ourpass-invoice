import { createServer, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      invoice: Model,
    },

    seeds(server) {
      server.create("invoice", {
        clientName: "Dipa Inhouse",
        clientEmail: "hello@dipainhouse.com",

        billingAddress: {
          street: "Ijen Boulevard Street 101",
          city: "Malang city 65115",
          state: "East Java Indonesia"
        },
        billedTo: {
          name: "Zaky Grizzly",
          company: "MonLight Agency LTD",
          country: "New York, USA"
        },
        invoice: {
          id: "INV-2022-010",
          issueDate: "11 Jan 2022",
          dueDate: "18 Jan 2022"
        },
        itemDetail: {
          rate: "40",
          hours: "120",
          tax: "0",
          lineTotal: "4800.00"
        },
        payment: {
          accountName: "Barly Vallenditor",
          accountNumber: "9700002342002900",
          routingNumber: "0840009519"
        }
      }
      )
    },

    routes() {
      // this.namespace = "api"

      this.get("/api/invoice", (schema) => {
        return schema.invoice
      })
    },
  })

  return server
}
