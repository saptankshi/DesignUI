import React from 'react';
import Header from './Header';
import ContentTabs from './ContentTabs';
import ImageGrid from './ImageGrid';

function MainContent() {
  return (
    <main className="flex flex-col w-full  mx-auto items-center justify-center align-center xs:max-w-[600px] max-w-[1250px] ">
      <Header />
      <ContentTabs />
      <ImageGrid />
    </main>
  );
}

export default MainContent;