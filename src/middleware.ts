import { defineMiddleware } from "astro/middleware"

export const onRequest = defineMiddleware(async (context, next) => {
  const lang = context.cookies.get("lang")?.value
  if (!lang) {
    context.cookies.set("lang", "en", { path: "/", maxAge: 60 * 60 * 24 * 365 })
  }
  return next()
})
