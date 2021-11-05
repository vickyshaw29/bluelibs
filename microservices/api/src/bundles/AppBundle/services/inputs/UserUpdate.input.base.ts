/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { UserRoles } from "../../collections";

@Schema()
export class UserProfileInput {
  @Is(a.string().required())
  firstName: string;

  @Is(a.string().required())
  lastName: string;
}

@Schema()
export class UserUpdateInput {
  @Is(a.boolean().nullable())
  isEnabled?: boolean;

  @Is(() => Schema.from(UserProfileInput))
  profile?: UserProfileInput;

  @Is(
    an
      .array()
      .of(a.string().oneOf(Object.values(UserRoles)))
      .required()
  )
  roles?: UserRoles[] = [];
}
