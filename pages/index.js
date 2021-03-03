import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/header';
import MinecraftInfo from '../components/minecraft-info';
import ButtonFilter from '../components/button-filter';
import Footer from '../components/footer';
import vtubersData from '../data/vtubers.json';

export const getStaticProps = async () => ({
  props: {
    vtubersDataList: vtubersData,
  },
});

const Wrapper = styled.div`
  min-height: calc(100vh - 185px);
  margin-bottom: 4rem;
`;

const Home = ({ vtubersDataList }) => {
  const [selectedVtuberName, setSelectedVtuberName] = useState('');
  const [selectedMinecraftUUID, setSelectedMinecraftUUID] = useState('');

  const handleSelected = (vtuberName, minecraftUUID) => {
    setSelectedVtuberName(vtuberName);
    setSelectedMinecraftUUID(minecraftUUID);
  };

  return (
    <>
      <Head>
        <title>VTuber Minecraft Skins</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Nokz" />
        <meta
          name="description"
          content="Check out every VTuber's Minecraft skin."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Wrapper>
        <Header />
        {selectedMinecraftUUID ? (
          <MinecraftInfo
            vtuberName={selectedVtuberName}
            minecraftUUID={selectedMinecraftUUID}
          />
        ) : null}
        <ButtonFilter
          vtubers={vtubersDataList.vtubers}
          selectedMinecraftUUID={selectedMinecraftUUID}
          onSelected={handleSelected}
        />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
