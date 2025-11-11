import React from 'react'
import PageControl from '../PageControl'

function ClientSatisfection() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <PageControl
        title="Solution / Client Satisfaction"
        breadcrumb="Solution / Client Satisfaction"
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1500&q=80"
        link="/"
      />

      {/* Content Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-red-900 text-center mb-10">
          Client Satisfaction
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Softec brings determination, enthusiasm, commitment, challenging and an innovative approach 
          to every client engagement. We solve our clients' most critical and pressing problems 
          and provide robust solutions.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At Softec, we treat our client’s business problems as our own. We'd like you to read some 
          of our success stories which explain how we have helped our clients succeed.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          At Softec, we also treat our client’s success as our own. For each client, we build a 
          powered team from our global workforce, matching skills and specific industry experience 
          to address the specific issues and challenges of every engagement.
        </p>
      </section>
    </div>
  )
}

export default ClientSatisfection
