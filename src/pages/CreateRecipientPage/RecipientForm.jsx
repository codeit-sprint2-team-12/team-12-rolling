import styled from 'styled-components';

const FormStyle = styled.form`
  padding: 5.7rem 2.4rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: fit-content;
  }

  @media screen and (min-width: 1248px) {
    width: 100%;
    max-width: fit-content;
  }

  & .RecipientForm {
    &__profile-box {
      margin-bottom: 5rem;
    }
    &__relationship-box {
      margin-bottom: 5rem;
    }
    &__content-box {
      margin-bottom: 5rem;
    }
    &__font-box {
      @media screen and (min-width: 375px) {
        margin-bottom: 16.2rem;
      }

      @media screen and (min-width: 768px) {
        margin-bottom: 6.2rem;
      }
    }
    &__input-box {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      margin-bottom: 5rem;
    }
    &__title-box {
      margin-bottom: 2.4rem;
    }
    &__option-box {
      display: flex;
      flex-direction: column;
      gap: 4.5rem;
      margin-bottom: 6.9rem;
    }
    &__submit-box {
      @media screen and (min-width: 375px) {
        position: fixed;
        bottom: 2.4rem;
        left: 2.4rem;
        right: 2.4rem;
      }

      @media screen and (min-width: 1248px) {
        position: static;
      }
    }
  }
`;

function RecipientForm({ children }) {
  return <FormStyle>{children}</FormStyle>;
}
export default RecipientForm;
