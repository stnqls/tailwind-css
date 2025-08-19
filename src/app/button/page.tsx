import Button from '@/components/Button';

export default function page() {
  return (
    <>
      <h1 className="text-20">Button Variant</h1>
      <Button>기본 Button</Button>
      <Button variant={'secondary'}>Secondary Button</Button>
      <Button variant={'danger'}>Danger Button</Button>
      <Button variant={'ghost'}>Ghost Button</Button>
      <Button variant={'outline'}>Outline Button</Button>
      <Button className="bg-amber-500 hover:bg-amber-600">Custom Button</Button>
      <br />
      <h1 className="text-20">Button Size</h1>
      <Button size={36}>Button Size 36</Button>
      <Button size={40}>Button Size 40</Button>
      <Button size={44}>Button Size 44</Button>
      <Button size={48}>Button Size 48</Button>
    </>
  );
}
