import React from 'react';

import Header from '../partials/Header';
import BlogSingle from '../partials/BlogSingle';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        ></div>

        {/*  Page sections */}
        <BlogSingle />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default BlogPost;
