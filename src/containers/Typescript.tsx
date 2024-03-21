type CanadianAddress = {
  street: string;
  province: string;
}

type USAddress = {
  street: string,
  state: string
}

type ItalianAddress = {
  street: string,
  region: string
}

type JointAddress = CanadianAddress | USAddress | ItalianAddress;

const Address: JointAddress = {
  street: 'test',
  region: 'test'
}

export default function Typescript() {
  return (
    <div>Typescript</div>
  )
}
