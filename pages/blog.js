import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";
import { FillButton, OutlineButton } from "../components/ui/Button";

export default function Blog() {
  useEffect(() => {
    console.log(document.monetization);
  }, []);
  return (
    <>
      <Head>
        <meta name="monetization" content="$ilp.uphold.com/rKe8mMbUGkBm" />
      </Head>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <h1 className="text-3xl font-prim my-4">
          How to live healthily! - World Health Organisation
        </h1>
        <p className="w-5/6 h-fit font-prim my-3 text-prim">
          1. Eat a healthy diet 1_20190529_091438_LR Photo: FAO/J. Grey Eat a
          combination of different foods, including fruit, vegetables, legumes,
          nuts and whole grains. Adults should eat at least five portions (400g)
          of fruit and vegetables per day. You can improve your intake of fruits
          and vegetables by always including veggies in your meal; eating fresh
          fruit and vegetables as snacks; eating a variety of fruits and
          vegetables; and eating them in season. By eating healthy, you will
          reduce your risk of malnutrition and noncommunicable diseases (NCDs)
          such as diabetes, heart disease, stroke and cancer.
        </p>
        <p className="w-5/6 h-fit font-prim my-3 text-prim">
          2. Consume less salt and sugar 2_WHO_056764.orig Photo: WHO/C. Black
          Filipinos consume twice the recommended amount of sodium, putting them
          at risk of high blood pressure, which in turn increases the risk of
          heart disease and stroke. Most people get their sodium through salt.
          Reduce your salt intake to 5g per day, equivalent to about one
          teaspoon. It’s easier to do this by limiting the amount of salt, soy
          sauce, fish sauce and other high-sodium condiments when preparing
          meals; removing salt, seasonings and condiments from your meal table;
          avoiding salty snacks; and choosing low-sodium products. On the other
          hand, consuming excessive amounts of sugars increases the risk of
          tooth decay and unhealthy weight gain. In both adults and children,
          the intake of free sugars should be reduced to less than 10% of total
          energy intake. This is equivalent to 50g or about 12 teaspoons for an
          adult. WHO recommends consuming less than 5% of total energy intake
          for additional health benefits. You can reduce your sugar intake by
          limiting the consumption of sugary snacks, candies and sugar-sweetened
          beverages.
        </p>
        <p className="w-5/6 h-fit font-prim my-3 text-prim">
          3. Reduce intake of harmful fats 3_WHO_056149.img Photo: WHO/S. Volkov
          Fats consumed should be less than 30% of your total energy intake.
          This will help prevent unhealthy weight gain and NCDs. There are
          different types of fats, but unsaturated fats are preferable over
          saturated fats and trans-fats. WHO recommends reducing saturated fats
          to less than 10% of total energy intake; reducing trans-fats to less
          than 1% of total energy intake; and replacing both saturated fats and
          trans-fats to unsaturated fats. The preferable unsaturated fats are
          found in fish, avocado and nuts, and in sunflower, soybean, canola and
          olive oils; saturated fats are found in fatty meat, butter, palm and
          coconut oil, cream, cheese, ghee and lard; and trans-fats are found in
          baked and fried foods, and pre-packaged snacks and foods, such as
          frozen pizza, cookies, biscuits, and cooking oils and spreads.
        </p>
        <Link href="/">
          <a>
            <OutlineButton className=" mt-8 py-3 font-semibold px-10">
              Go Back
            </OutlineButton>
          </a>
        </Link>
      </div>
    </>
  );
}
