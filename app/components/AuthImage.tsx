import { Image } from "@mantine/core";
import { AuthUserType } from "~/services/auth.server";

export function AuthImage(props: { auth: AuthUserType }) {
  if (props.auth) {
    return (
      <Image src={props.auth.image} alt={props.auth.name} h={40} radius="xl" />
    );
  }
}
