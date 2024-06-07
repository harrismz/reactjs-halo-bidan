import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-col`
const Input = tw.input`border-2 px-3 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

const SubmitButton = tw(PrimaryButtonBase)`inline-block lg:mt-6 lg:mt-0`

export default ({
  subheading = "Contact Us",
  heading = <>Feel free to <span tw="text-primary-500">get in touch</span><wbr /> with us.</>,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  submitButtonText = "Contact Me",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const sendWhatsapp = (e) => {
    e.preventDefault()
    const nama = e.target.nama.value;
    const hp = e.target.hp.value;
    const email = e.target.email.value;
    const keluhan = e.target.keluhan.value;
    const url = "https://api.whatsapp.com/send?phone=6282111460050&text=Saya%20*" + nama + "*%0A%20dengan%20nomor%20hp%20_" + hp + "_%0A%20dan%20alamat%20email%20_" + email + "_%0A%20mau%20berkonsultasi%20dengan%20halo%20bidan%2C%0A%20keluhan%20saya%20adalah%20_" + keluhan + "_";
    window.open(url, '_blank');
  }
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Form onSubmit={sendWhatsapp}>
              <Input type="text" id="nama" placeholder="Nama Lengkap" />
              <Input type="email" id="email" placeholder="Alamat Email" />
              <Input type="text" id="hp" placeholder="Nomor Handphone" />
              <Input type="textarea" id="keluhan" placeholder="keluhan" />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
