import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log('Usuario registrado:', data);
    alert('¡Registro exitoso! (simulado)');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email', { required: 'Email es obligatorio', pattern: /^\S+@\S+$/i } )}
          placeholder="Email"
          style={{ display: 'block', width: '100%', margin: '10px 0', padding: '8px' }}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message || 'Email inválido'}</p>}

        <input
          {...register('password', { required: 'Contraseña obligatoria', minLength: { value: 6, message: 'Mínimo 6 caracteres' } })}
          type="password"
          placeholder="Contraseña"
          style={{ display: 'block', width: '100%', margin: '10px 0', padding: '8px' }}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

        <button type="submit" style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none' }}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;