import { TextField, Link as MuiLink } from "@mui/material";
import { useAppDispatch } from "app/hooks";
import { PasswordField, RequestButton } from "common/components";
import { RegisterFormValues } from "modules/auth/types";
import { useForm } from "react-hook-form";
import { createAdminAccount } from "modules/auth/authSlice";
import {
  checkPasswordMatch,
  emailValidator,
  maxLengthValidator,
  minLengthValidator,
  passwordValidator,
  validationMessages,
} from "utils/validationPatterns";
import FormContainer from "../FormContainer/FormContainer";
import { Link } from "react-router-dom";
import routes from "routes/routePaths";

const defaultValues: RegisterFormValues = {
  email: "",
  schoolName: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({ defaultValues });
  const dispatch = useAppDispatch();

  const submitRegister = (formValues: RegisterFormValues) => {
    dispatch(createAdminAccount(formValues));
  };

  const password = watch("password");

  return (
    <FormContainer
      onSubmit={handleSubmit(submitRegister)}
      title="Tworzenie konta">
      <TextField
        {...register("email", {
          required: validationMessages.required,
          pattern: emailValidator,
        })}
        type="email"
        size="small"
        label="E-mail"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        {...register("schoolName", {
          required: validationMessages.required,
          minLength: minLengthValidator(3),
          maxLength: maxLengthValidator(100),
        })}
        size="small"
        label="Nazwa szkoły"
        error={!!errors.schoolName}
        helperText={errors.schoolName?.message}
      />
      <PasswordField
        {...register("password", {
          required: validationMessages.required,
          pattern: passwordValidator,
        })}
        size="small"
        label="Hasło"
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <PasswordField
        {...register("confirmPassword", {
          required: validationMessages.required,
          validate: (val) => checkPasswordMatch(val, password),
        })}
        size="small"
        label="Potwierdź hasło"
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />
      <RequestButton type="submit" isLoading={false}>
        Utwórz konto
      </RequestButton>
      <MuiLink component={Link} to={routes.Login}>
        Wróć do ekranu logowania
      </MuiLink>
    </FormContainer>
  );
};

export default RegisterForm;
