import Test from "@/components/molecules/Test";

export default function Page({ params }: { params : { timestamp: string } }): JSX.Element {
  console.log("modal param", params)

  return (
    <Test>
      <h2>Hi</h2>
    </Test>
  );
}