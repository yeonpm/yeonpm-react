export default function useClientPlugin() {
  return {
    name: "use-client-directive",
    transform(code, id) {
      if (id.endsWith(".tsx") || id.endsWith(".ts")) {
        if (code.includes('"use client"') || code.includes("'use client'")) {
          return {
            code: code.replace(/"use client";\n|'use client';\n/, ""),
            map: null,
          };
        }
      }
      return null;
    },
  };
}
