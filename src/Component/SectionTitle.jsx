

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className='text-center mx-auto md:w-6/12 mb-3'>
      <p className=' text-yellow-500 text-lg mb-3'> --- {subHeading} ---</p>
      <h3 className='text-3xl uppercase border-y-4 py-2'> {heading} </h3>
    </div>
  );
};

export default SectionTitle;