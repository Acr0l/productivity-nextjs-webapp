export const fetcher = async ({
  url,
  method,
  body,
  json = true,
}: {
  url: string;
  method: string;
  body?: any;
  json?: boolean;
}) => {
  const res = await fetch(url, {
    method,
    // This happens only if body exists
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.log(res);
    // Handle error
    throw new Error("API error");
  }

  if (json) {
    const data = await res.json();
    return data.data;
  }
};

export const register = (user: any) => {
  return fetcher({
    url: "/api/register",
    method: "POST",
    body: user,
  });
};
export const signin = (user: any) => {
  return fetcher({
    url: "/api/signin",
    method: "POST",
    body: user,
  });
};

export const createNewProject = async (name: string) => {
  return fetcher({
    url: "/api/project",
    method: "POST",
    body: { name },
  });
};
