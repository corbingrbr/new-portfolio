const ProjectIconImage = ({ icon }) => (
  <div className="w-full aspect-w-1 aspect-h-1">
    <span className="rounded-lg bg-gray-200 grid place-items-center">
      <i className={`fa-10x ${icon} text-gray-400`} />
    </span>
  </div>
);

export default ProjectIconImage;
