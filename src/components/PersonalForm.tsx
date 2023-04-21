function PersonalForm() {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-denim font-bold text-sm">Name</label>
        <input type="text" id="name" className="border border-border font-medium text-denim outline-purple rounded-md p-[8px]" placeholder="Your name goes here..." />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-denim font-bold text-sm">Email Address</label>
        <input type="text" id="email" className="border border-border font-medium text-denim outline-purple rounded-md p-[8px]" placeholder="Your email goes here..." />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-denim font-bold text-sm">Phone Number</label>
        <input type="text" id="phone" className="border border-border font-medium text-denim outline-purple rounded-md p-[8px]" placeholder="e.g. +1 234 567 890" />
      </div>
    </div>
  )
}

export default PersonalForm