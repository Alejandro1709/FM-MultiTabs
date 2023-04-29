function PersonalForm() {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-bold text-denim">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="rounded-md border border-border p-[8px] font-medium text-denim outline-purple"
          placeholder="Your name goes here..."
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-bold text-denim">
          Email Address
        </label>
        <input
          type="text"
          id="email"
          className="rounded-md border border-border p-[8px] font-medium text-denim outline-purple"
          placeholder="Your email goes here..."
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-sm font-bold text-denim">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          className="rounded-md border border-border p-[8px] font-medium text-denim outline-purple"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </div>
  );
}

export default PersonalForm;
