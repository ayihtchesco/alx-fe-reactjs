function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      <img
        src="https://media.licdn.com/dms/image/v2/D4E03AQGGevYFq6pajg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731997736847?e=1757548800&v=beta&t=MBkB7FKO4s7GjNIYPQslpriOjrVSdxsdt3g4FWVow3c"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto"
      />
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
