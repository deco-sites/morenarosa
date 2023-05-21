import { useSignal } from "@preact/signals";
import { Runtime } from "$store/runtime.ts";
import type { JSX } from "preact";

const subscribe = Runtime.create(
  "deco-sites/std/actions/vtex/newsletter/subscribe.ts",
);

function Newsletter() {
  const loading = useSignal(false);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      loading.value = true;

      const email =
        (e.currentTarget.elements.namedItem("email") as RadioNodeList)?.value;

      await subscribe({ email });
    } finally {
      loading.value = false;
    }
  };

  return (
    <div class="flex flex-col sm:flex-col items-center gap-5 py-5 px-10 md:justify-center">
      <div class="flex flex-col gap-2 w-full">
        <span class="font-medium text-2xl text-center text-primary-content">
          NEWSLETTER
        </span>
        <span class="text-sm text-primary-content text-center">
          Cadastre-se para receber as novidades e ganhe 15% na primeira compra!
        </span>
      </div>
      <form
        class="font-body text-body w-full form-control"
        onSubmit={handleSubmit}
      >
        <div class="flex flex-col md:flex-row gap-4 md:justify-center">
          <input
            name="text"
            class="flex-grow input w-full input-primary"
            placeholder="Nome"
          />
          <input
            name="email"
            class="flex-grow input w-full input-primary"
            placeholder="E-mail"
          />
          <button class="btn disabled:loading" disabled={loading}>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
