import Link from "next/link";
import { IconUserFilled } from "@tabler/icons-react";

export function PlayerCard(props: {
  id: number;
  name: string;
  position: string;
  height: number;
  weight: number;
  birthDate: Date;
}) {
  let age = Math.floor(
    (new Date().getTime() - new Date(props.birthDate).getTime()) / 31557600000,
  );

  return (
    <Link
      href={"/dashboard/pemain/" + props.id}
      className="rounded-lg border p-2.5 hover:bg-gray-100"
    >
      <div className="mb-1">
        <IconUserFilled className={"h-auto w-full"} />
      </div>

      <div className="mb-0.5 text-lg font-semibold leading-4">{props.name}</div>
      <div className="mb-1.5 text-sm">{props.position}</div>
      <div className="text-sm">
        {props.height} cm / {props.weight} kg
      </div>
      <div className="text-sm">{age} tahun</div>
    </Link>
  );
}
