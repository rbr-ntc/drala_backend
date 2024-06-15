// src/user/validators/username.validator.ts
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsUsernameValidConstraint implements ValidatorConstraintInterface {
  validate(username: string): boolean {
    const regex = /^[a-zA-Z0-9]+$/;
    return typeof username === 'string' && regex.test(username) && username.length >= 5 && username.length <= 20;
  }

  defaultMessage(): string {
    return 'Username must be between 5 and 20 characters long and contain only alphanumeric characters';
  }
}

export function IsUsernameValid(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUsernameValidConstraint,
    });
  };
}